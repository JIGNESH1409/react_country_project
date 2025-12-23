import footerApi from '../../Api/footerApi';
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

const Footericon={
    MdPlace : <MdPlace/>,
    IoCallSharp : <IoCallSharp/>,
    TbMailPlus : <TbMailPlus/>,
}
export const Footer=()=>{
    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {
                    footerApi.map((curElem)=>{
                        const {icon,title,details}=curElem;
                        return(
                            <div className="footer-contact">
                                <div className="icon">
                                   {Footericon[icon]}
                                </div>
                                <div className="footer-contact-text">
                                    <p>{title}</p>
                                    <p>{details}</p>
                                </div>

                            </div>


                        );
                    })
                }
            </div>

            <div className="copyright-area">
                <div className="grid grid-two-column">
                    <div className="copyright-text">
                            <p >Copyright @ 2024 WorldAtlas. All rights reserved</p>
                    </div>
                </div>
            </div>


        </footer>
    );
}