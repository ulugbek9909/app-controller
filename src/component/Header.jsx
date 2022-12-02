import React from 'react';
import './header.css'
import 'antd/dist/reset.css'
import {Button, Form, Input, Select, Space} from 'antd'
import {BiMinusCircle, BiPlus} from "react-icons/bi";

const Header = () => {
    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <Form className='in_form' onFinish={onFinish}>
            <Form.Item name={"sender"} label="Sender Organization">
                <Input placeholder="Organization Name"/>
            </Form.Item>
            <Form.Item name={"receiver"} label="Receiver Organization">
                <Input placeholder="Organization Name"/>
            </Form.Item>
            <Form.Item name={"information"} label="Information">
                <Input placeholder="Information Name"/>
            </Form.Item>
            <Form.Item name={"url"} label="URL">
                <Input placeholder="Enter Url"/>
            </Form.Item>
            <Form.Item name={"method"} label="Sender Organization">
                <Input placeholder="Organization Name"/>
            </Form.Item>
            <Form.List name={"request"}>
                {(fields, {add, remove}) => (
                    <>
                        {fields.map((field, index) => {
                            return (
                                <Space key={field.key} direction={"horizontal"} size={12}>
                                    <Form.Item name={[field.name, "name"]} label={`${index + 1}-Field`}
                                               rules={[{required: true, message: 'First name required'}]}>
                                        <Input placeholder="Name"/>
                                    </Form.Item>
                                    <Form.Item name={[field.name, "marking"]}>
                                        <Input placeholder="Marking"/>
                                    </Form.Item>
                                    <Form.Item name={[field.name, "size"]}
                                               rules={[{required: true}]} >
                                        <Input placeholder="Size" type={"number"} min={"1"} max={"50"}/>
                                    </Form.Item>
                                    <Form.Item name={[field.name, "required"]}>
                                        <Select placeholder={"required"}>
                                            {["YES", "NO"].map(value => {
                                                return <Select.Option value={value}
                                                                      key={value}>{value}</Select.Option>
                                            })}
                                        </Select>
                                    </Form.Item>
                                    <BiMinusCircle style={{height: 70, color: "red"}} onClick={() => {
                                        remove(field.name)
                                    }}
                                    ></BiMinusCircle>

                                </Space>
                            )

                        })}
                        <Form.Item>
                            <Button icon={<BiPlus/>} type="dashed" block onClick={() => {
                                add();
                            }}>
                                Add a Request Body
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.List name={"response"}>
                {(fields, {add, remove}) => (
                    <>
                        {fields.map((field, index) => {
                            return (
                                <Space key={field.key} direction={"horizontal"} size={12}>
                                    <Form.Item name={[field.name, "name"]} label={`${index + 1}-Field`}
                                               rules={[{required: true, message: 'First name required'}]}>
                                        <Input placeholder="Name"/>
                                    </Form.Item>
                                    <Form.Item name={[field.name, "marking"]}>
                                        <Input placeholder="Marking"/>
                                    </Form.Item>
                                    <Form.Item name={[field.name, "size"]}
                                               rules={[{required: true}]} >
                                        <Input placeholder="Size" type={"number"} min={"1"} max={"50"}/>
                                    </Form.Item>
                                    <Form.Item name={[field.name, "required"]}>
                                        <Select placeholder={"required"}>
                                            {["YES", "NO"].map(value => {
                                                return <Select.Option value={value}
                                                                      key={value}>{value}</Select.Option>
                                            })}
                                        </Select>
                                    </Form.Item>
                                    <BiMinusCircle style={{height: 70, color: "red"}} onClick={() => {
                                        remove(field.name)
                                    }}
                                    ></BiMinusCircle>

                                </Space>
                            )

                        })}
                        <Form.Item>
                            <Button icon={<BiPlus/>} type="dashed" block onClick={() => {
                                add();
                            }}>
                                Add a Response Body
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Button htmlType={"submit"} type={"primary"}>Submit</Button>
        </Form>
    );
};

export default Header;