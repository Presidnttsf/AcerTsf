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
import App from '../App';

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




            </Routes>

        </Container >


    )
}
