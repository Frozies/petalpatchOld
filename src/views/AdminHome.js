import React from "react";
import Axios from "axios";
import { Container, Search, Item, Input, Label, Checkbox } from 'semantic-ui-react'


function AdminHome() {
    // let [responseData, setResponseData] = React.useState('')

    // Axios({
    //     method: "GET",
    //     url: "http://localhost:4000/flora",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then(res => {
    //     setResponseData(res.data);
    //     console.log(res.data);
    // }).catch(error => {
    //     console.log(error);
    //     setResponseData(error);
    // });;

    return (
        <div>
            <Container>
                {/*Product search*/}
                <h1>Enter a Teleflora Product ID or URL</h1>
                <Search showNoResults={false} size={"big"} placeholder={'https://www.teleflora.com/bouquet/make-a-wish/'}/>
            </Container>
            <br/>
            <Container>
                {/*Product name and description*/}
                <h1>Make a Wish Bouquet</h1>
                <p>Make someone's dreams come true with this extra-special, premium version of our Make a Wish bouquet, featuring a bigger, brighter bouquet with even more blooms in happy hues of yellow, purple, orange and red! Whatever the occasion, it's an eye-catching display that's sure to make someone's day.</p>

                {/*Product sizes and prices*/}
                <Item.Group>
                    <Item>
                        {/*Todo make this one component and load depending on different sizes of products*/}
                        {/*Standard*/}
                        <Item.Image size='medium' src='https://img.teleflora.com/images/o_0/l_flowers:TEV13-6A,pg_6/w_800,h_1000,cs_no_cmyk,c_pad/f_jpg,q_auto:eco,e_sharpen:200/flowers/TEV13-6A/MakeaWish' />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header>Standard</Item.Header>
                            <Item.Content>
                                <Input size={"large"} labelPosition='right' type='text' defaultValue='34'>
                                    <Label basic>$</Label>
                                    <input />
                                    <Label>.99</Label>
                                </Input>
                            </Item.Content>
                        </Item.Content>
                    </Item>

                    <Item>
                        {/*Deluxe*/}
                        <Item.Image size='medium' src='https://img.teleflora.com/images/o_0/l_flowers:TEV13-6B,pg_6/w_800,h_1000,cs_no_cmyk,c_pad/f_jpg,q_auto:eco,e_sharpen:200/flowers/TEV13-6B/MakeaWish' />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header>Deluxe</Item.Header>
                            <Item.Content>
                                <Input size={"large"} labelPosition='right' type='text' defaultValue='44'>
                                    <Label basic>$</Label>
                                    <input />
                                    <Label>.99</Label>
                                </Input>
                            </Item.Content>
                        </Item.Content>
                    </Item>

                    <Item>
                        {/*Premium*/}
                        <Item.Image size='medium' src='https://img.teleflora.com/images/o_0/l_flowers:TEV13-6C,pg_6/w_800,h_1000,cs_no_cmyk,c_pad/f_jpg,q_auto:eco,e_sharpen:200/flowers/TEV13-6C/MakeaWish' />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header>Premium</Item.Header>
                            <Item.Content>
                                <Input size={"large"} labelPosition='right' type='text' defaultValue='54'>
                                    <Label basic>$</Label>
                                    <input />
                                    <Label>.99</Label>
                                </Input>
                            </Item.Content>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Container>

            {/*Categories*/}
            <Container>
                <Checkbox label='Christmas'/>
                <Checkbox label='Thanks Giving'/>
                <Checkbox label='Easter'/>
                <Checkbox label='Mothers Day'/>
                <Checkbox label='Grand Parents Day'/>
                {/*todo autoload this stuff*/}
            </Container>


        </div>
    );
}

export default AdminHome