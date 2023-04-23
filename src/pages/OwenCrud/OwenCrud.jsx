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
import Gap from "../../components/gap/Gap";
import { useGetBiodata } from "./hooks/useBiodatas";

const OwenCrud = () => {
  const [form] = Form.useForm();
  const { Title } = Typography;

  const [rowData, setRowData] = useState();

  const TABLE_COLUMNS = [
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

  const [isLoadingBiodata, biodata, getBiodata] = useGetBiodata();

  useEffect(() => {
    getBiodata();
  }, []);

  return (
    <>
      <Title>Form</Title>
      <Gap height={40} />

      <Form
        form={form}
        name="form"
        layout="horizontal"
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Table columns={TABLE_COLUMNS} />
    </>
  );
};

export default OwenCrud;
