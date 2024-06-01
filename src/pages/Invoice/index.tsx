import SelectCustomer from '@/components/Inputs/Selects/Customer';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Table, Upload, message } from 'antd';
import { UploadProps } from 'antd/lib';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Invoices = () => {
  const [loading, setLoading] = useState(false);
  const [invoices, setInvoices] = useState([{}]);
  const [customer, setCustomer] = useState('');
  const stopLoading = () => setLoading(false);
  const startLoading = () => setLoading(true);

  const featchData = async () => {
    startLoading();
    try {
      const response = await axios.get(
        `https://api-lumi.brasgran.com.br/invoice/files/${customer}`,
      );
      setInvoices(response.data);
      stopLoading();
      message.info('Invoices fetched successfully');
    } catch (error) {
      stopLoading();
      message.error('Error fetching invoices:');
    }
  };

  const props: UploadProps = {
    name: 'file',
    action: 'https://api-lumi.brasgran.com.br/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        featchData();
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  useEffect(() => {
    if (customer) {
      featchData();
    }
  }, [customer]);

  const columns = [
    {
      title: 'Mês de refêrencia',
      dataIndex: 'mothRef',
      key: 'mothRef',
    },
    {
      title: 'Numero da instalação',
      dataIndex: 'numInstall',
      key: 'numInstall',
    },
    {
      title: 'Operações',
      key: 'options',
      render: (record: any) => {
        return (
          <a
            key={record.id}
            href={`https://api-lumi.brasgran.com.br/files/${record?.file?.name}`}
            download
            target="_"
          >
            <DownloadOutlined key={record.id} />
          </a>
        );
      },
    },
  ];

  return (
    <>
      <Row justify={'start'}>
        <Col lg={8}>
          <SelectCustomer onChange={(value) => setCustomer(value)} />
        </Col>
      </Row>
      <Row justify={'end'}>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Row>
      <Table loading={loading} dataSource={invoices} columns={columns} />
    </>
  );
};
export default Invoices;
