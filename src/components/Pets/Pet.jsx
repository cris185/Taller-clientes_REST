import React, { useState } from 'react';

import { Form, Button, Select, Spin, Card } from 'antd';
import { toast } from 'react-toastify';
import axios from 'axios';
import PetCard from './PetCard';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

/**
 * @description export Pet component
 * @returns {JSX.Element}
 */

const Pet = () => {
  const [spinning, setSpinning] = useState(false);
  const [pet, setPet] = useState([]);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      setSpinning(true);
      const url = `/api/pet/findByStatus?status=${values.status}`;
      const { data } = await axios.get(url);
      setPet([]);
      setPet(data);
      toast.success('Pet list updated');
    } catch (error) {
      console.log(error.response);
    } finally {
      setSpinning(false);
    }
  };

  return (
    <>
      <Spin spinning={spinning} tip="Loading...">
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="status"
            label="Select status"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select a option " allowClear>
              <Option value="available">Available</Option>
              <Option value="pending">Pending</Option>
              <Option value="sold">Sold</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Spin>
      <Card title="Pet List">
        {pet.map((p, idx) => (
          <PetCard loading={spinning} key={`${p.id}-${idx}`} pet={p} />
        ))}
      </Card>
    </>
  );
};
export default Pet;
