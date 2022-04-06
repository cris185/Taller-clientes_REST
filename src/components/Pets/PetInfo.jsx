import React, { useState, useEffect } from 'react';

import { Form, Spin, Button } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';

import axios from 'axios';
import Swal from 'sweetalert2';

import PetForm from './Form';
import { useHistory } from 'react-router';

const PetInfo = ({ match }) => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let didCancel = true;
    const fetch = async () => {
      try {
        const url = `/api/pet/${match.params.id}`;
        const { data } = await axios.get(url);
        form.setFieldsValue(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    if (didCancel) fetch();

    return () => {
      didCancel = false;
    };
  }, [form, match]);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const url = `/api/pet`;
      const { data } = await axios.put(url, {
        id: match.params.id,
        ...values,
      });
      form.setFieldsValue(data);
      toast.success('Pet updated successfully');
    } catch (error) {
      toast.error('Error updating pet');
    } finally {
      setLoading(false);
    }
  };
  const confirmDelete = async () => {
    try {
      const { isConfirmed } = await Swal.fire({
        title: 'Confirm delete',
        text: 'Do you want to continue?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Delete',
        cancelButtonText: 'No, Cancel',
      });
      if (!isConfirmed) return;
      const url = `/api/pet/${match.params.id}`;
      await axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          api_key: 'special-key',
        },
      });
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      history.push('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <Spin spinning={loading} tip="Loading...">
      <Button danger onClick={() => confirmDelete()}>
        <MinusCircleOutlined />
      </Button>
      <PetForm form={form} onFinish={onFinish} />
    </Spin>
  );
};

export default PetInfo;
