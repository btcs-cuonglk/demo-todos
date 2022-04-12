import Header from "./components/Header";
import Main from "./components/Main/Todos";
import Img from "./image/image-1.jpg";
//import { Button } from "antd";
//import { Typography, Space } from "antd";
//import { Menu, Dropdown, message } from "antd";
//import { DownOutlined } from "@ant-design/icons";
// import { Row, Col } from "antd";
// import { Form, Input, Button, Select } from "antd";
import { Radio } from "antd";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
//

export default function App() {
  // dropdown click
  // const onClick = ({ key }) => {
  //   message.info(`Click on item ${key}`);
  // };
  // const menu = (  <Menu onClick={onClick}>
  //   <Menu.Item key="1">1st menu item</Menu.Item>
  //   <Menu.Item key="2">2nd menu item</Menu.Item>
  //   <Menu.Item key="3">3rd menu item</Menu.Item>
  // </Menu>)

  // dropdown hover
  // const menu = (
  //   <Menu>
  //     <Menu.Item key="0">
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.antgroup.com"
  //       >
  //         1st menu item
  //       </a>
  //     </Menu.Item>
  //     <Menu.Item key="1">
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.aliyun.com"
  //       >
  //         2nd menu item
  //       </a>
  //     </Menu.Item>
  //     <Menu.Divider />
  //     <Menu.Item key="3" disabled>
  //       3rd menu item（disabled）
  //     </Menu.Item>
  //   </Menu>
  // );

  // const { Text, Link } = Typography;

  // menu
  // const { SubMenu } = Menu;
  // handleClick = (e) => {
  //   console.log("click ", e);
  // };

  // radio
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  // input
  // const { Option } = Select;

  // const layout = {
  //   labelCol: { span: 8 },
  //   wrapperCol: { span: 16 },
  // };
  // const tailLayout = {
  //   wrapperCol: { offset: 8, span: 16 },
  // };

  // const [form] = Form.useForm();

  // const onGenderChange = (value: string) => {
  //   switch (value) {
  //     case "male":
  //       form.setFieldsValue({ note: "Hi, man!" });
  //       return;
  //     case "female":
  //       form.setFieldsValue({ note: "Hi, lady!" });
  //       return;
  //     case "other":
  //       form.setFieldsValue({ note: "Hi there!" });
  //   }
  // };

  // const onFinish = (values: any) => {
  //   console.log(values);
  // };

  // const onReset = () => {
  //   form.resetFields();
  // };

  // const onFill = () => {
  //   form.setFieldsValue({
  //     note: "Hello world!",
  //     gender: "male",
  //   });
  // };
  //   const SubMenuTheme = () => {
  //   const [theme, setTheme] = React.useState("light");
  //   const [current, setCurrent] = React.useState("1");

  //   const changeTheme = (value) => {
  //     setTheme(value ? "dark" : "light");
  //   };

  //   const handleClick = (e) => {
  //     setCurrent(e.key);
  //   };
  // };

  // state = {
  //   collapsed: false,
  // };

  // toggleCollapsed = () => {
  //   setState({
  //     collapsed: state.collapsed,
  //   });
  // };

  return (
    // <Radio>Radio</Radio>

    <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>

    // <div style={{ width: 256 }}>
    //   <Button
    //     type="primary"
    //     onClick={toggleCollapsed}
    //     style={{ marginBottom: 16 }}
    //   >
    //     {React.createElement(
    //       state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
    //     )}
    //   </Button>
    //   <Menu
    //     defaultSelectedKeys={["1"]}
    //     defaultOpenKeys={["sub1"]}
    //     mode="inline"
    //     theme="dark"
    //     inlineCollapsed={state.collapsed}
    //   >
    //     <Menu.Item key="1" icon={<PieChartOutlined />}>
    //       Option 1
    //     </Menu.Item>
    //     <Menu.Item key="2" icon={<DesktopOutlined />}>
    //       Option 2
    //     </Menu.Item>
    //     <Menu.Item key="3" icon={<ContainerOutlined />}>
    //       Option 3
    //     </Menu.Item>
    //     <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
    //       <Menu.Item key="5">Option 5</Menu.Item>
    //       <Menu.Item key="6">Option 6</Menu.Item>
    //       <Menu.Item key="7">Option 7</Menu.Item>
    //       <Menu.Item key="8">Option 8</Menu.Item>
    //     </SubMenu>
    //     <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
    //       <Menu.Item key="9">Option 9</Menu.Item>
    //       <Menu.Item key="10">Option 10</Menu.Item>
    //       <SubMenu key="sub3" title="Submenu">
    //         <Menu.Item key="11">Option 11</Menu.Item>
    //         <Menu.Item key="12">Option 12</Menu.Item>
    //       </SubMenu>
    //     </SubMenu>
    //   </Menu>
    // </div>

    // <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
    //   <Form.Item name="note" label="Note" rules={[{ required: true }]}>
    //     <Input />
    //   </Form.Item>
    //   <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
    //     <Select
    //       placeholder="Select a option and change input text above"
    //       onChange={onGenderChange}
    //       allowClear
    //     >
    //       <Option value="male">male</Option>
    //       <Option value="female">female</Option>
    //       <Option value="other">other</Option>
    //     </Select>
    //   </Form.Item>
    //   <Form.Item
    //     noStyle
    //     shouldUpdate={(prevValues, currentValues) =>
    //       prevValues.gender !== currentValues.gender
    //     }
    //   >
    //     {({ getFieldValue }) =>
    //       getFieldValue("gender") === "other" ? (
    //         <Form.Item
    //           name="customizeGender"
    //           label="Customize Gender"
    //           rules={[{ required: true }]}
    //         >
    //           <Input />
    //         </Form.Item>
    //       ) : null
    //     }
    //   </Form.Item>
    //   <Form.Item {...tailLayout}>
    //     <Button type="primary" htmlType="submit">
    //       Submit
    //     </Button>
    //     <Button htmlType="button" onClick={onReset}>
    //       Reset
    //     </Button>
    //     <Button type="link" htmlType="button" onClick={onFill}>
    //       Fill form
    //     </Button>
    //   </Form.Item>
    // </Form>

    // <>
    //   <Row>
    //     <Col span={24} className="bg-red-50">
    //       col
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={12}>col-12</Col>
    //     <Col span={12}>col-12</Col>
    //   </Row>
    //   <Row>
    //     <Col span={8}>col-8</Col>
    //     <Col span={8}>col-8</Col>
    //     <Col span={8}>col-8</Col>
    //   </Row>
    //   <Row>
    //     <Col span={6}>col-6</Col>
    //     <Col span={6}>col-6</Col>
    //     <Col span={6}>col-6</Col>
    //     <Col span={6}>col-6</Col>
    //   </Row>
    // </>

    // <Space direction="vertical">
    //   <Text>Ant Design (default)</Text>
    //   <Text type="secondary">Ant Design (secondary)</Text>
    //   <Text type="success">Ant Design (success)</Text>
    //   <Text type="warning">Ant Design (warning)</Text>
    //   <Text type="danger">Ant Design (danger)</Text>
    //   <Text disabled>Ant Design (disabled)</Text>
    //   <Text mark>Ant Design (mark)</Text>
    //   <Text code>Ant Design (code)</Text>
    //   <Text keyboard>Ant Design (keyboard)</Text>
    //   <Text underline>Ant Design (underline)</Text>
    //   <Text delete>Ant Design (delete)</Text>
    //   <Text strong>Ant Design (strong)</Text>
    //   <Text italic>Ant Design (italic)</Text>
    //   <Link href="https://ant.design" target="_blank">
    //     Ant Design (Link)
    //   </Link>
    // </Space>

    // <Dropdown overlay={menu}>
    //   <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
    //     Hover me <DownOutlined />
    //   </a>
    // </Dropdown>

    //   <Dropdown overlay={menu}>
    //   <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    //     Hover me, Click menu item <DownOutlined />
    //   </a>
    // </Dropdown>

    // <div>
    //   <h1 className=" text-13 text-white h-10 px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 space-x-4 ">
    //     Hello world!
    //   </h1>
    //   <h2 className="font-hurri  hover:not-italic text-48 text-red-600 h-50 mx-5 mt-2 bg-gradient-to-t from-green-400 to-blue-500 p-10 min-h-full hover:minHeight">
    //     hero
    //   </h2>
    //   <p
    //     before="hello"
    //     className="indent-5 inline-block align-baseline align-top before:content-[attr(before)] before:content-[attr(before)] "
    //   >
    //     So I started to walk into the water. I won't lie to you boys, I was
    //     terrified. But I pressed on, and as I made my way past the breakers a
    //     strange calm came over me. I don't know if it was divine intervention or
    //     the kinship of all living things but I tell you Jerry at that moment, I{" "}
    //     <em className="whitespace-normal">was</em> a marine biologist.
    //   </p>
    //   {/* <img className="rotate-12" src="./image/image-1.jpg"></img>
    //   <div className=""></div> */}
    // </div>

    // <div className=" mt-4 hover:mt-8">
    //   hover
    // </div>
  );
}
