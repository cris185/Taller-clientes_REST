import React, { useState } from 'react';

import axios from 'axios';
import { Form, Spin } from 'antd';
import { toast } from 'react-toastify';
import PetForm from './Form';
import { useHistory } from 'react-router';

/**
 * @description Exports the CreatePet component
 * @returns {JSX.Element} CreatePet component
 */

const CreatePet = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const url = `/api/pet`;
      const { data } = await axios.post(url, values);
      form.setFieldsValue(data);
      toast.success('Pet created successfully');
    } catch (error) {
      toast.error('Error updating pet');
    } finally {
      setLoading(false);
      history.push('/');
    }
  };
  return (
    <Spin spinning={loading}>
      <PetForm form={form} onFinish={onFinish} />
    </Spin>
  );
};

CreatePet.propTypes = {};

export default CreatePet;
