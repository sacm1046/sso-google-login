import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body, html{
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #F8F8FF;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        }
    .btn{
        border-radius: 5px;
        border-color: transparent;
        padding: 5px 15px;
        margin: 10px 0;
        outline: none !important;
        a{
            text-decoration: none;
            color: white;
            &:hover{
                color: white; 
            }
            &>img{
                width: 40px;
                transform: scale(1);
                transition: 200ms ease;
                &:hover{
                    transform: scale(1.05);     
                }
            }
            
        }
    }
    .alert-container{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    @media print {
        @page { 
            margin: 0;
            size: letter portrait;
        }
        body { 
            margin: 0; 
            background-color: #2857A7 !important;
            -webkit-print-color-adjust: exact; 
        }
    }
    .react-datepicker-popper{
        transform: translate3d(45px, 40px, 0px) !important; 
        @media only screen and (min-width: 992px){
            transform: translate3d(187px, -87px, 0px) !important;
        } 
        @media only screen and (min-width: 576px) and (max-width: 991px){
            transform: translate3d(50px, 40px, 0px) !important;
        }
    }
`;