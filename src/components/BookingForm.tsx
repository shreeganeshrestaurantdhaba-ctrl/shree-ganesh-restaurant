import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const BookingForm = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <Input
        label="Phone"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />

      <Input
        type="date"
        label="Date"
        value={data.date}
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />

      <Button type="submit">Book Now</Button>
    </form>
  );
};

export default BookingForm;