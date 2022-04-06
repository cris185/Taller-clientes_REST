import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Form, Button, Select, Input, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

/**
 * @typedef FormProps
 * @type {Object}
 * @property {Object} form - Form properties.
 * @property {Function} onFinish submit form.
 */

/**
 * @description Form component for adding and editing pets
 * @prop {Object} FormProps
 * @returns {JSX.Element}
 */

const PetForm = memo(({ form, onFinish }) => {
  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="name" label="Pet name" rules={[{ required: true }]}>
        <Input placeholder="name" />
      </Form.Item>
      <Form.Item
        name={['category', 'name']}
        fieldKey={['category', 'name']}
        label="Category"
        rules={[{ required: true }]}
      >
        <Input placeholder="Category" />
      </Form.Item>
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

      <Form.List name="tags">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space
                key={key}
                style={{
                  display: 'flex',
                  marginBottom: 8,
                  justifyContent: 'center',
                }}
                align="baseline"
              >
                <Form.Item
                  {...restField}
                  name={[name, 'name']}
                  label="Tag name"
                  fieldKey={[fieldKey, 'name']}
                  rules={[{ required: true, message: 'Missing tag' }]}
                >
                  <Input placeholder="Tag" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item style={{ justifyContent: 'center' }}>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item  {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
});

PetForm.propTypes = {
  form: PropTypes.object.isRequired,
  onFinish: PropTypes.func.isRequired,
};

export default PetForm;
