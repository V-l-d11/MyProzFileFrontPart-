import React from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SimpleMDE from 'react-simplemde-editor'
import styles from './AddPost.module.scss';
import { selectIsAuth } from '../../../Redux/slices/auth';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams} from 'react-router-dom';
import 'easymde/dist/easymde.min.css'
import axios from '../../../axios'


export const AddPost = () => {

  const {id} = useParams()
  const isAuth = useSelector(selectIsAuth)
  
  const navigate = useNavigate()
  const [loading , setLoading]= React.useState(false)
  const [value, setValue] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('')
  const inputFileRef = React.useRef(null)
  
  const isEditing = Boolean(id)
  
    
    
  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData()
      const file = event.target.files[0]
  
      formData.append('image', file)
      const { data } = await axios.post('/upload', formData)
      console.log(data)
      setImageUrl(data.url)
    } catch (err) {
      console.warn(err)
      alert('Error' , err)
   }
  };

  const onClickRemoveImage =async (value) => {
    setImageUrl('')
  };

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);
 
  const onSubmit = async () => {
    try {
      setLoading(true)

      const fields = {
        title,
        imageUrl,
        tags: tags,
        value,
        isAuth
      }

      console.log(fields, 'field')
      const { data } = isEditing
        ? await axios.patch(`/posts/${id}`, fields)
        :await axios.post('/posts', fields)
       
      
      const _id = isEditing ? id :  data._id;
      navigate(`/posts/${_id}`)
   
    } catch (err) {
      console.warn(err)
      alert('Err')
    }
  }

  React.useEffect(() => {
    if (id) {
      axios.get(`/posts/${id}`)
        .then(data => {
        setTitle(data.title)
        setValue(data.value)
        setImageUrl(data.imageUrl)
        setTags(data.tags.join(','))
      }).catch(err => {
        console.log(err)
        alert('Errr post get')
      })
    }
  },[])

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: 'Введите текст...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );

  //if (!isAuth) {
  //  return <Navigate to="/" />
  //}


  if (!window.localStorage.getItem('token') && !isAuth) {
   return <Navigate to="/" />
 }

  
  

  return (
    <Paper style={{ padding: 30 }}>
      <Button onClick={()=>inputFileRef.current.click()} variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChangeFile}
        hidden />
      
      {imageUrl && (
        <>
          <Button
            variant="contained"
            color="error"
            onClick={onClickRemoveImage}
          >
          Удалить
        </Button>
         <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
         </>
      )}
     
      <br />
      <br />
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок статьи..."
        value={title}
        onChange={e=>setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        classes={{ root: styles.tags }}
        value={tags}
        onChange={(e)=>setTags(e.target.value)}
        variant="standard"
        placeholder="Тэги"
        fullWidth />
      <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options} /> 
      <div className={styles.buttons}>
        <Button onClick={onSubmit} size="large" variant="contained">
          {isEditing ? 'Save' :'Опубликовать' }
        </Button>
        <a href="/">
          <Button size="large">Отмена</Button>
        </a>
      </div>
    </Paper>
  );
};


