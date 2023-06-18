import { AiFillGithub } from 'react-icons/ai';
import './Github.css';
const Github = () => {
  return (
    <div className="github-logo-container">
      <a href="https://github.com/SurajG20/Weather-App" target="blank">
        <AiFillGithub className="github-logo" />
      </a>
    </div>
  );
};
export default Github;
