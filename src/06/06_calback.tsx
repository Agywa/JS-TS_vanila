import React, {ChangeEvent, MouseEvent} from "react";


const callback = (): number => {
    alert("hey")
    return 12;
}


// window.setTimeout(callback, 1000);

export const User = () => {

    const search = (e: MouseEvent<HTMLButtonElement>) => {

    }


    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {

        alert(e.currentTarget.name)
    }

    // const saveUser = () => {
    //     alert("user should been saved")
    // }
    const onNameChanged = () => {
        console.log("Name changed")
    }
    const focusLostHandler = () => {
        console.log("Focus lost")
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed" + e.currentTarget.value)
    }

    return (
        <div> <textarea
            onChange={onNameChanged}
            onBlur={focusLostHandler}
        >Dimych</textarea>

            <input onChange={onAgeChanged} type={"number"}/>

            <button name="delete" onClick={search}>search</button>
            {/*<button name="save" onClick={deleteUser}>x</button>*/}
        </div>
    )
}

