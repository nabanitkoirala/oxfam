import React, { useContext } from 'react';
import { DataContext, MunicipalityContext, ProvinceContext, TestContext } from './oxfam data/Store';


export default function Testmap() {
    const [Data, setData] = useContext(DataContext);
    const [Municipality] = useContext(MunicipalityContext);
    const [Province] = useContext(ProvinceContext);
    let Toilet_no = Data.filter((item) => item.toilet === "छैन");
    let Toilet = Toilet_no.length;
    let Toilet_yes = Data.filter((item) => item.toilet === "छ")
    let Toilet1 = Toilet_yes.length;

    console.log("data>>>", Data);
    console.log("municipality>>>", Municipality);
    console.log("Province>>>", Province);
    console.log("count toilet>>>", Toilet);
    console.log("Toilet yes>>>", Toilet1);


    return (

        < div >
            <h2>Hello</h2>

        </div >
    )
}
