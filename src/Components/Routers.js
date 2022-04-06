import React from 'react'
import TriangleComponent from './TriangleComponent';
import FormPractice from './FormPractice';
import Firstpage from './Firstpage';
import { Routes, Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Home from './Home';
import LinksComponent from './Links';
import DatafromPC from './DatafromPC';
import DataFromApi from './DataFromApi';
import DisplayImg from './DisplayImg';
import PrintTable from './PrintTable';
import PropsComponent from './Props';
import FullImages from './FullImages';
import GetInput from './GetInput';
import HideShow from './HideShow';
import GetFormData from './GetFormData';
import ConditionalRendering from './ConditionalRendering';
import FunProps from './FunProps';
import CounterApp from './CounterApp';

export default function RoutersComponent() {



    return (

        <Container fluid>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="links" element={<LinksComponent />} />
                <Route path="trianglecomponent" element={<TriangleComponent />} />
                <Route path="formpractice" element={<FormPractice />} />
                <Route path="firstpage" element={<Firstpage />} />
                <Route path="datafrompc" element={<DatafromPC />} />
                <Route path="axiosapi" element={<DataFromApi />} />
                <Route path="displayimages" element={<DisplayImg />} />
                <Route path="printtables" element={<PrintTable />} />
                <Route path="propscomponent" element={<PropsComponent />} />
                <Route path="viewfullimages" element={<FullImages />} />
                <Route path="getinput" element={<GetInput />} />
                <Route path="hideshow" element={<HideShow />} />
                <Route path="formdata" element={<GetFormData />} />
                <Route path="rendering" element={<ConditionalRendering />} />
                <Route path="funprop" element={<FunProps />} />
                <Route path="counterapp" element={<CounterApp />} />




            </Routes>

        </Container >


    )
}
