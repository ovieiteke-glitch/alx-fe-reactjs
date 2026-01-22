 function UserProfile(props) {
   return (
     <div style={{border: '1px solid red',padding: '10px',margin:'5px'}}>
       <h2 style={{color: 'blue', }}>{props.name}</h2>
       <p><span style={{ fontWeight: 'bold', color: 'gold' }}>Age: {props.age}</span></p>
       <p>Bio: {props.bio}</p>
     </div>
   );
 };

 export default UserProfile;