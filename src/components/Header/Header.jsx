import {Menu} from "./components/Menu";
import {Title} from "./components/Title";

export const Header = () => {
    return (
        <div className="header-container">
            <Title/>
            <Menu/>
        </div>
    )
}