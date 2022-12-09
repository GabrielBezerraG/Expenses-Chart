import { StyledHeader } from './styles';

export default function Header() {
   return (
      <StyledHeader>
         <div>
            <h2>My balance</h2>
            <h3>$921.48</h3>
         </div>
         <img className='header__logo' src='/images/logo.svg' alt='Logo'/>
      </StyledHeader>
   )
}