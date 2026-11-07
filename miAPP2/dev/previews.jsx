import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import ScreenPract from "../screen/ListScreen";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/ScreenPract">
                <ScreenPract/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews