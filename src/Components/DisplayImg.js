import React from 'react'
import IMAGES from '../Data/images/imagesData'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Container } from 'react-bootstrap'
import FullImages from './FullImages';
// u can import image directly as component see below example.
// import { ReactComponent as CryptographyImage } from '../Data/images/Cryptography_role_security.jpg';
export default function DisplayImg() {
    console.log("Imgaes", IMAGES)


    return (
        <Container fluid>

            <h1>Displaying Images</h1>
            <Row>
                {IMAGES.map((i, j) => {

                    return (

                        <Col sm={3}>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={i} />

                                <Card.Body>

                                    <Card.Text>
                                        IMAGE: {j + 1}
                                    </Card.Text>
                                    <Button variant="primary"> <Link to='/viewfullimages' className='navlink'> View full Size</Link></Button>

                                </Card.Body>


                            </Card>
                        </Col>



                    )

                }

                )}
            </Row>


            {/* <CryptographyImage /> */}

            {/* {IMAGES.map(i =>
                <Col xs={12}>
                    <img width="25%" height="300px" src={i} alt="img1" />
                </Col>
            )} */}



            {/* <h3>single image</h3>
            <div>
                <img src={IMAGES[6]} alt='' /> <br />
                <img src={IMAGES[2]} width='100%' alt='' /> <br />


            </div> */}


        </Container>

    )
}
