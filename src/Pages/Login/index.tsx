import React from 'react'
import * as Yup from 'yup';
import ReusableForm from '../../components/Forms';

interface LoginInterface{}
interface FieldConfig {
    name: string;
    label: string;
    type: string;
    variant: "outlined" | "filled" | "standard"
  }
const Login:React.FC<LoginInterface> = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
      };
      const validationSchema = Yup.object({
        username: Yup.string()
          .required('Required')
          .min(3, 'Must be at least 3 characters'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .required('Required')
          .min(6, 'Must be at least 6 characters'),
      });
      const onSubmit = (values:any) => {
        console.log('Form data', values);
      }
      const fields:FieldConfig[] = [
        { name: 'username', label: 'Username', type: 'text',variant:'outlined' },
        { name: 'email', label: 'Email', type: 'email',variant:'outlined' },
        { name: 'password', label: 'Password', type: 'password' ,variant:'outlined'},
      ];
  return (
    <div style={{width:"97vw",height:"97vh"}}> 
       <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center", alignItems:"center"}}>
        <div style={{display:"flex",flexDirection:"column", width:"30%"}}>
        <h1 style={{width:"100%",textAlign:"center"}}>Iniciar sesion</h1>
            <ReusableForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(e)=>onSubmit(e)}
            fields={fields}
            styles={{formStyle:{padding:"10px"},inputsStyle:{marginBottom:"20px",width:"100%"}}}
            />
        </div>
       </div>
    </div>
  )
}

export default Login