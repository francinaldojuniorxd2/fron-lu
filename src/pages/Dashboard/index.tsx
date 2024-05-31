import SelectCustomer from '@/components/Inputs/Selects/Customer';
import { Line } from '@ant-design/charts';
import { Col, Row, message } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard: React.FC<any> = ({}) => {
  const [invoices, setInvoices] = useState([{}]); //[{}
  const [customer, setCustomer] = useState('');

  const featchData = async () => {
    console.log('fetching data');
    try {
      const response = await axios.get(
        `http://ec2-34-229-217-14.compute-1.amazonaws.com:8001/invoice/dashboard/${customer}`,
      );
      setInvoices(response.data);
      message.info('Invoices fetched successfully');
    } catch (error) {
      message.error('Error fetching invoices:');
    }
  };

  useEffect(() => {
    if (customer) {
      featchData();
    }
  }, [customer]);

  const consumedEnergy = invoices?.map((invoice: any) => ({
    mothRef: invoice?.mothRef,
    value: invoice?.total?.totalConsumed,
  }));

  const compensatedEnergy = invoices?.map((invoice: any) => ({
    mothRef: invoice?.mothRef,
    value: invoice?.total?.compensatedEnergy,
  }));

  const totalValue = invoices?.map((invoice: any) => ({
    mothRef: invoice?.mothRef,
    value: invoice?.total?.totalValue,
  }));

  const economyGd = invoices?.map((invoice: any) => ({
    mothRef: invoice?.mothRef,
    value: invoice?.total?.economyGd,
  }));

  const porpsFixed = {
    xField: 'mothRef',
    yField: 'value',
  };

  const propsCompensatedEnergy = {
    data: compensatedEnergy,
    ...porpsFixed,
  };

  const propsConsumedEnergy = {
    data: consumedEnergy,
    ...porpsFixed,
  };

  const propsTotalValue = {
    data: totalValue,
    ...porpsFixed,
  };

  const propsEconomyGd = {
    data: economyGd,
    ...porpsFixed,
  };

  return (
    <>
      <Row justify={'start'}>
        <Col lg={8}>
          <SelectCustomer onChange={(value) => setCustomer(value)} />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Line
            title={'Consumo de energia Elétrica Kwh'}
            {...propsConsumedEnergy}
            style={{
              width: '50px',
              height: '3px',
            }}
          />
        </Col>
        <Col lg={12}>
          <Line
            title={'Consumo de energia Compensada Kwh'}
            {...propsCompensatedEnergy}
            style={{
              width: '250px',
              height: '5px',
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Line
            title={'Valor total sem GD R$'}
            {...propsTotalValue}
            style={{
              width: '50px',
              height: '3px',
            }}
          />
        </Col>
        <Col lg={12}>
          <Line
            title={'Economia GD Kwh'}
            {...propsEconomyGd}
            style={{
              width: '250px',
              height: '5px',
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
