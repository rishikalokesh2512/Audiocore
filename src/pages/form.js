import React from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import Layout from "../components/layout"
import { Link } from "gatsby"



const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <br/>
        <input className="text-input" {...field} {...props} />
        
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  
  const MyCheckbox = ({ children, ...props }) => {
    
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
      <div>
        <label className="checkbox">
          <input type="checkbox" {...field} {...props} />
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };
  
  const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  
  
  // And now we can use these
  const SignupForm = () => {
    return (
      <Layout>
        <h1 style={{marginTop:'100px'}}>Subscribe!</h1>
        <br/>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            acceptedTerms: false, // added for our checkbox
            jobType: '', // added for our select
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            acceptedTerms: Yup.boolean()
              .required('Required')
              .oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string()
              .oneOf(
                ['designer', 'development', 'product', 'other'],
                'Invalid Job Type'
              )
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >   
          <Form  netlify style={{margin:'50px', padding:'20px', display:'table', fontSize:'20px'}}>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
              style={{margin:'10px', fontSize:'20px', backgroundColor:'lightblue',width:'100%'}}
            /> <br />
            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
              style={{margin:'10px', fontSize:'20px', backgroundColor:'lightblue',width:'100%'}}
            /> <br />
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
              style={{margin:'10px', fontSize:'20px', backgroundColor:'lightblue',width:'100%'}}
            /> <br />
            <MySelect label="Job Type" name="jobType" style={{margin:'10px', fontSize:'20px', 
            backgroundColor:'lightblue', width:'100%'}}>
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect> <br />
            <MyCheckbox name="acceptedTerms">
              I accept the terms and conditions
            </MyCheckbox>
            <br />
            <button type="submit" style={{width:'30%', backgroundColor:'lavenderblush', fontSize:'15px'}}>Submit</button>
          </Form>
        </Formik>
      </Layout>
    )
  }

  export default SignupForm