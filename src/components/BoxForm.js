import React, {useState} from 'react';

const BoxForm = (props) => {
    const[color, setColor] = useState("");
    const[height, setHeight] = useState(0);
    const[width, setWidth] = useState(0);

    const addBox = (e) => {
        e.preventDefault();
        props.createBox({
            BoxColor: color,
            BoxHeight: height,
            BoxWidth: width,
        })
        setColor("");
        setHeight(0);
        setWidth(0);
    }

    return(
        <form class="col-6" onSubmit={addBox}>
            <h3>Welcome! Please create a box by entering some information below!</h3>
            <hr/>
            <div class="form-group">
                <label>Color: </label>
                <input type="text" class="form-control" onChange={(e) => setColor(e.target.value)} value={color}/>
            </div>
            <div class="form-group">
                <label>Height in Pixels: </label>
                <input type="text" class="form-control" onChange={(e) => setHeight(e.target.value)} value={height}/>
            </div>
            <div class="form-group">
                <label>Width in Pixels: </label>
                <input type="text" class="form-control" onChange={(e) => setWidth(e.target.value)} value={width}/>
            </div>
            <input type="submit" value="Add Box" class="btn btn-primary"/>
        </form>
    );
}
export default BoxForm;