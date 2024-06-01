import { Select } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
const { Option } = Select;

interface SelectCustomerProps {
  onChange?: (value: string) => void;
}

const SelectCustomer: React.FC<SelectCustomerProps> = ({ onChange }) => {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async (value: string) => {
    console.log('fetching customers', value);
    try {
      const response = await axios.get(`https://api-lumi.brasgran.com.br/invoice/${value}`);
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  useEffect(() => {
    fetchCustomers('_');
  }, []);

  return (
    <Select
      onSearch={(value) => fetchCustomers(value)}
      onChange={(value) => onChange?.(value)}
      showSearch
      size="large"
      style={{
        width: '100%',
      }}
    >
      {customers.map((customer: any) => (
        <Option key={customer.numClient} value={customer.numClient}>
          {customer.numClient}
        </Option>
      ))}
    </Select>
  );
};

export default SelectCustomer;
