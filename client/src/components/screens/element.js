import styled from "styled-components"

export const WelcomeContainer = styled.div`
    text-align: center;
    padding: 3em 0;
    .landing h3 {
        font-weight: 200;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    .landing h3 span {
        font-weight: 700;
    }

    .landing p {
        font-weight: 100;
        line-height: 24px;
        margin-bottom: 55px;
    }

    .signup h2 {
        font-weight: 600;
        display: inline-block;
        font-size: 35px;
        line-height: 30px;
        margin: 0;
    }

    .signup ul {
        display: flex;
        width: 790px;
        float: center;
        margin: auto;
    }

    .signup p {
        font-weight: 100;
        line-height: 24px;
        margin-bottom: 5px;
    }

    .signup ul li {
        width: 155px;
        float: left;
        margin: 35px 21.2px 20px;
    }

    .signup ul li::before {
        content: "";
        display: block;
        height: 64px;
        margin: 0 auto 20px;
        width: 64px;
    }

    .signup ul li.step-1::before {
        background-image: url(https://dvi6scvzkvo7z.cloudfront.net/assets/layouts/header/roundel_01-209c18a3e0c4c7ce6493d2bfb35579ffe43badcb6dc82bb83b74eb8b200f8aa6.png);
    }

    .signup ul li.step-2::before {
        background-image: url(https://dvi6scvzkvo7z.cloudfront.net/assets/layouts/header/roundel_02-0ac3f254e6b5bb2e0f8f1c471b4c21c9e44d9d45cc6dda08612e2614169d4648.png);
    }

    .signup ul li.step-3::before {
        background-image: url(https://dvi6scvzkvo7z.cloudfront.net/assets/layouts/header/roundel_03-b2ae52985bd946e55b9de4d404136e596258c5813a99458c776b434e8bfa13ad.png);
    }

    .signup ul li.step-4::before {
        background-image: url(https://dvi6scvzkvo7z.cloudfront.net/assets/layouts/header/roundel_04-b9dae5b2d8a3c5a45d441bf8ecf4ea0e4a964bc86c6098162877394bee5fc37c.png);
    }

    .signin {
        margin-top: 6em;
    }

    .signin h2 {
        font-weight: 600;
        display: inline-block;
        font-size: 35px;
        line-height: 30px;
        margin: 0;
    }

    .signin p {
        font-weight: 100;
        line-height: 24px;
        margin-bottom: 5px;
    }


    button {
        font-weight: 600;
        background: none;
        border: 1px solid #1a8a7a;
        color: #232323;
        font-size: 16px;
        height: 44px;
        line-height: 18px;
        padding: 14px;
        text-align: center;
        text-transform: uppercase;
        width: 300px;
        cursor: pointer;
    }

    button:hover {
        border: 1px solid #65bdb0;
        color: #777;
        transition: all ease-in-out 0.7s;
    }
`;

export const SignUpContainer = styled.div`
    .mycard {
        margin-top: 3em;
        margin-bottom: 3em;
    }
    fieldset {
        border: none;
    }
    .sv-btn {
        font-weight: 600;
        background: none;
        border: 1px solid #1a8a7a;
        color: #232323;
        font-size: 16px;
        height: 44px;
        line-height: 18px;
        padding: 14px;
        text-align: center;
        text-transform: uppercase;
        width: 200px;
        cursor: pointer;
    }
    .sv-imagepicker {
        dispaly: flex !important;
    }
`;

export const SignInContainer = styled.div`
    .mycard {
        margin-top: 3em;
        margin-bottom: 3em;
    }
`;

export const FooterContainer = styled.div`
    background-color: #fff;
    hr {
        display: block;
        border-width: 0;
        border-top: 1px solid #e8e8e8;
    }
    .main-footer {
        display: flex;
        align-content: center;
        margin-top: 1.5em;
        padding-top: 1em;
        padding-bottom: 2em;
    }
    .brand-logo {
        font-size: 2.1rem;
    }
    .footer-social {
        display: flex;
        flex-grow: 3;
        align-items: center
    }
    .footer-icons {
        display: flex;
    }
    span {
        font-size: 14px;
        text-transform: uppercase;
        margin: 0px 0.5em 0px 0px;
    }
    img {
        width: 33px;
        height: 33px;
        margin: 0px 0.3em 0px 0px;
    }
`;

export const CreatePostContainer = styled.div`
    .file-field {
        display: flex;
    }
    select {
        margin-top: 1em;
    }
`;

export const SettingsContainer = styled.div`
    .settings {
        background: #fff;
        display: flex;
        max-width: 900px;
        margin: 4em auto 4em auto;
    }
    .settings-nav {
        border-right: 1px solid #dbdbdb;
    }
    .settings-nav div {
        line-height: 20px;
        padding: 16px 25px 16px 30px;
        font-size: 16px;
        cursor: pointer;
        border-left: 2px solid transparent;
    }
    .settings-nav div:hover {
        transition: all ease-in-out 0.4s;
        background-color: rgba(var(--b3f,250,250,250),1);
        border-left: 2px solid #C62828;
    }
    .settings-nav .active {
        border-left: 2px solid #C62828;
    }
    .settings-form {
        padding-top: 2em;
        padding-bottom: 2em;
        padding-left: 5em;
        padding-right: 2em;
        width: 40%;
    }
    .settings-form  .profile-pic {
        display: flex;
        align-content: center;
    }
    .settings-form img {
        width: 50px;
        border-radius: 50px;
        margin-top: 1.3em;
        margin-right: 2em;
    }
    .settings-form label {
        cursor: pointer;
    }
    .settings-form input[type=file] {
        display: none;
    }
    .settings-form form {
        margin-top: 3em;
    }
    .settings-form form div {
        margin-bottom: 1em;
    }
    .settings-form form input {
        width: 100%;
    }
`;

export const BreadCumbContainer = styled.div`
    background: #d0cdcd;
    padding: 2em 0;
    
    i {
        margin-left: 5px;
        margin-right: 5px;
    }
    .container div {
        display: flex;
        align-items: center;
    }
    a {
        color: #1E88E5 !important;
        font-weight: 600;
    }
`;