import { FC } from "react";
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

type FieldType = {
    name: string;
    contact: number;
    address: string;
  };

const EntryForm: FC = () => {
    const [form] = Form.useForm();
    const handleSaveForm = async (values: FieldType) => {
        const res = await fetch('/api/form', {'method': 'POST', 'headers': {'Content-Type': 'application/json'}, 'body': JSON.stringify(values)});
        const data = await res.json();
        if (data.status === 'success') {
          form.resetFields();
        }
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
      handleSaveForm(values);
    };
    
    return (<Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter name!' }]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item<FieldType>
          label="Contact"
          name="contact"
          rules={[{ required: true, message: 'Please enter contact number!' }]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item<FieldType>
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please enter Address!' }]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
    
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>);
}

export default EntryForm;
