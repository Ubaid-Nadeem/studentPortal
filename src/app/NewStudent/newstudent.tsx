import React from "react";

import { StudentsContext } from "@/context/studentcontext";

import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  message,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {} from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const NewStudent = () => {
  const { allStudents, setAllStudents } = StudentsContext();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Successfully Added!',
        duration: 2,
      });
    }, 1000);
  };


  const onFinish = ({ user }: any) => {
    let newStudent = {
      name: user.name,
      fatherName: user.fatherName,
      absent: user.Absent || 0,
      attendence: user.attendence || 0,
      course: user.courseDuration,
      feesStatus: [
        {
          month: "January",
          isPaid: false,
        },
        {
          month: "February",
          isPaid: false,
        },
        {
          month: "March",
          isPaid: false,
        },
        {
          month: "March",
          isPaid: false,
        },
        {
          month: "April",
          isPaid: false,
        },
        {
          month: "May",
          isPaid: false,
        },
        {
          month: "June",
          isPaid: false,
        },
        {
          month: "July",
          isPaid: false,
        },
        {
          month: "August",
          isPaid: false,
        },
        ,
        {
          month: "September",
          isPaid: false,
        },
        {
          month: "October",
          isPaid: false,
        },
        {
          month: "November",
          isPaid: false,
        },
        {
          month: "December",
          isPaid: false,
        },
      ],
      location: user.location,
      rollNumber: user.rollNumber,
      testResults: user.results || [],
      timing: user.timing,
    };

    let cloneStudents = [...allStudents, newStudent];
    setAllStudents(cloneStudents);

    form.resetFields();
    openMessage()
  };

  return (
    <>
     {contextHolder}
      <Form
        {...layout}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
        form={form}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter a name" />
        </Form.Item>
        <Form.Item
          name={["user", "fatherName"]}
          label="Father Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter a father name" />
        </Form.Item>

        <Form.Item
          name={["user", "rollNumber"]}
          label="Roll Number"
          rules={[{ type: "number", required: true }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Courrse"
          name={["user", "course"]}
          rules={[{ required: true }]}
        >
          <Select placeholder="Select Course">
            <Select.Option value="Web and App Development">
              Web and App Development
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Timing"
          name={["user", "timing"]}
          rules={[{ required: true }]}
        >
          <Select placeholder="Select Timing">
            <Select.Option value="2pm to 4pm">2pm to 4pm</Select.Option>
            <Select.Option value="4pm to 6pm">4pm to 6pm</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Course Duration"
          name={["user", "courseDuration"]}
          rules={[{ required: true }]}
        >
          <Select placeholder="Select Course Duration">
            <Select.Option value="7 Months">7 Months</Select.Option>
            <Select.Option value="1 Year">1 Year</Select.Option>
            <Select.Option value="2 Year">2 Year</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Campus Location"
          name={["user", "location"]}
          rules={[{ required: true }]}
        >
          <Select placeholder="Select Campus">
            <Select.Option value="Ghulshan Campus">
              Ghulshan Campus
            </Select.Option>
            <Select.Option value="Bahadurabad (main branch)">
              Bahadurabad (main branch)
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name={["user", "attendence"]} label="Attentence">
          <InputNumber defaultValue={0} />
        </Form.Item>

        <Form.Item name={["user", "Absent"]} label="Absent">
          <InputNumber defaultValue={0} />
        </Form.Item>

        <div style={{ paddingLeft: "100px" }}>
          <Form.List name={["user", "results"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      style={{ width: "300px" }}
                      {...restField}
                      name={[name, "Test Name"]}
                      rules={[{ required: true, message: "Missing test name" }]}
                      label="Select Test"
                    >
                      <Select>
                        <Select.Option value="CSS">CSS</Select.Option>
                        <Select.Option value="Javascript 1">
                          Javascript 1
                        </Select.Option>
                        <Select.Option value="Advanced Javascript">
                          Advanced Javascript
                        </Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "totalmarks"]}
                      // label="Total Marks"
                    >
                      <InputNumber
                        placeholder="Total Marks"
                        defaultValue={100}
                      />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, "obtainmarks"]}
                      rules={[
                        { required: true, message: "Missing obtain marks" },
                      ]}
                      // label="Obtain Marks"
                    >
                      <InputNumber placeholder="Obtain Marks" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    shape="round"
                    size="large"
                    // type=""
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Test Result
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </div>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default NewStudent;
