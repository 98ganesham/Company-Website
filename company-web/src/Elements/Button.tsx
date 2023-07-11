import styled from "styled-components";

export const Button= styled.button`
text-decoration: none;

text-aling: center;
font-size: 2rem;
max-width: auto;
padding: 1.4rem 2.4rem ;
border: none;
border-radius:5px;
cursor: pointer;
background-color:green ;

transition: all 0.3s ease 0s;
-webkit-transition: all 0.3s ease 0s;
-moz-transition: all 0.3s ease 0s;
-o-transition: all 0.3s ease 0s;



&:hover, 
&:active{
    background-color:#93f9b9 ;
    color: #fff;
    box-shadow: 0 2rem 2rem 0 rgb(120 144 255 /10% );
    box-shadow: ${({theme})=> theme.colors.shadowSupport};
    transform: scale(0.96);
    
}
a{
    text-decoration: none;
   color:#000;
    font-size: 1.5rem;
    padding-right: 4px;

    
 ]
 
 }
 .react-logo{
    display: inline-block;
    margin-right: 10px;
    border-radius: 20px;
    max-height: 20px;
    max-width: 15px;

}



`;