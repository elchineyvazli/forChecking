import { createContext, useState } from "react";

export const SliderContext = createContext()

export const SliderProvider = ({ children }) => {
    let [whichSlide, setWhichSlide] = useState(1);

    const leftButtonFunction = () => {
        if (whichSlide === 1) {
            setWhichSlide(prev => prev = 3)
        } else {
            setWhichSlide(prev => prev - 1)
        }
    }

    const rightButtonFunction = () => {
        if (whichSlide === 3) {
            setWhichSlide(prev => prev = 1)
        } else {
            setWhichSlide(prev => prev + 1)
        }
    }
    return (
        <SliderContext.Provider
            value={{
                leftButtonFunction,
                rightButtonFunction,
                whichSlide
            }}>

            {children}

        </SliderContext.Provider>
    )
}