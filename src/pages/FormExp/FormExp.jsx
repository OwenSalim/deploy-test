import React, { useEffect, useState } from "react";
import {
  Typography,
  Form,
  Input,
  Button,
  Table,
  Space,
  Popconfirm,
} from "antd";
import { INITIAL_TABLE_DATA } from "./constants";
import Gap from "../../components/gap/Gap";
import {
  useGetBiodata,
  usePostBiodata,
  useDeleteBiodata,
  useUpdateBiodata,
} from "./hooks/useBiodatas";

const FormExp = () => {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const { TextArea } = Input;

  const [isLoadingBiodata, biodata, getBiodata] = useGetBiodata();
  const [isLoadingCreateBiodata, createBiodata] = usePostBiodata();
  const [isLoadingDeleteBiodata, deleteBiodata] = useDeleteBiodata();
  const [isLoadingUpdateData, updateBiodata] = useUpdateBiodata();

  // const [data, setData] = useState(INITIAL_TABLE_DATA);
  // const [key, setKey] = useState(INITIAL_TABLE_DATA.length + 1);

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  // Add data to table
  const onAdd = (values) => {
    // console.log({ values });

    // const newData = {
    //   key: key,
    //   ...values,
    // };

    // setData([...data, newData]);
    // setKey(key + 1);
    createBiodata(values, () => {
      getBiodata();
      form.resetFields();
    });
  };

  //Delete data from table
  const onDelete = (row_id) => {
    // const newData = data.filter((item) => item.key !== row_key);
    // setData(newData);
    deleteBiodata(row_id, () => {
      getBiodata();
    });
  };
  // console.log({ data });

  //Edit data from table
  const onEdit = (values) => {
    // console.log({ values });
    // const key = rowData?.key;
    // const newData = [...data];
    // const index = data?.findIndex((item) => key === item.key);

    // newData.splice(index, 1, {
    //   key: key,
    //   ...values,
    // });

    // setData(newData);

    const id = rowData.id;

    updateBiodata(id, values, () => {
      getBiodata();
      handleCancel();
    });

    form.resetFields();
  };

  //To handle edit button
  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
  };

  //To handle cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    form.resetFields();
  };

  useEffect(() => {
    getBiodata();
  }, []);

  const TABLE_COLUMNS = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (_, record) => (
        <img src={record.avatar} alt="Avatar" style={{ width: "20px" }} />
      ),
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "NIM",
      dataIndex: "nim",
      key: "nim",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",

      dataIndex: "action",

      render: (_, record) =>
        INITIAL_TABLE_DATA.length >= 1 ? (
          <Space>
            <a onClick={() => handleEdit(record)}>Edit</a>

            <Popconfirm
              title="Sure to delete?"
              arrow={false}
              onConfirm={() => onDelete(record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  return (
    <>
      <Title>Form Biodata Mahasiswa</Title>
      <Gap height={40} />

      {/* Form */}
      <Form
        form={form}
        name="form"
        layout="horizontal"
        labelAlign="left"
        autoComplete="off"
        onFinish={isEdit ? onEdit : onAdd}
        style={{
          maxWidth: 600,
        }}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        fields={[
          {
            name: ["firstName"],
            value: rowData?.firstName,
          },
          {
            name: ["lastName"],
            value: rowData?.lastName,
          },
          {
            name: ["nim"],
            value: rowData?.nim,
          },
          {
            name: ["address"],
            value: rowData?.address,
          },
        ]}
      >
        <Form.Item
          label="Avatar"
          name="avatar"
          rules={[
            {
              message: "Please input your avatar URL!",
            },
          ]}
        >
          <Input placeholder="Input your avatar URL" />
        </Form.Item>

        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input placeholder="Input your first name" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input placeholder="Input your last name" />
        </Form.Item>

        <Form.Item
          label="NIM"
          name="nim"
          rules={[
            {
              required: true,
              message: "Please input your nim!",
            },
          ]}
        >
          <Input placeholder="Input your nim" />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <TextArea placeholder="Input your address" />
        </Form.Item>

        <Form.Item>
          {isEdit ? (
            <Space>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button type="danger" onClick={handleCancel}>
                Cancel
              </Button>
            </Space>
          ) : (
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          )}
        </Form.Item>
      </Form>

      {/* Table */}
      <Table columns={TABLE_COLUMNS} dataSource={biodata} />
    </>
  );
};

export default FormExp;
