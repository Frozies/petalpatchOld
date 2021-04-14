import award2018 from "../../../public/imgs/Awards/2018Award.jpg";
import award2019 from "../../../public/imgs/Awards/2019Award.jpg";
import award2020 from "../../../public/imgs/Awards/2020Award.jpg";


const Awards = () => {
    return (
        <div className={"awards"}>

            <div className={"awards-row"}>

                <div className={"awards-box"}>
                    <div className={"awards-img-wrapper"}>
                        <img src={'public/js/' + award2018} alt={"2018 Award"}/>
                    </div>
                </div>

                <div className={"awards-box"}>
                    <div className={"awards-img-wrapper"}>
                        <img src={'public/js/' + award2019} alt={"2019 Award"}/>
                    </div>
                </div>

                <div className={"awards-box"}>
                    <div className={"awards-img-wrapper"}>
                        <img src={'public/js/' + award2020} alt={"2020 Award"}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Awards;