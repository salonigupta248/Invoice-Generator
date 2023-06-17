import { useState, useRef } from "react";
import Footer from "./components/Footer";
import ClientDetails from "./components/ClientDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import MainDetails from "./components/MainDetails";
import Dates from "./components/Dates";
import Header from "./components/Header";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [list, setList] = useState([]);
  const componentRef = useRef();
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="p-5 m-5 md:max-wd-xl md:mx-auto l:max-w-2xl xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        <ReactToPrint
          trigger={() => <button>Print / DownLoad</button>}
          content={() => componentRef.current}
        />
        {showInvoice ? (
          <>
            <div ref={componentRef}>
              <Header handlePrint={handlePrint} />
              <MainDetails name={name} address={address} />
              <ClientDetails
                clientName={clientName}
                clientAddress={clientAddress}
              />
              <Dates
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
              />
              <Table
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
              <Notes notes={notes} />
              <Footer
                name={name}
                address={address}
                email={email}
                website={website}
                phone={phone}
                bankAccount={bankAccount}
                bankName={bankName}
              />
            </div>
            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="text"
                    id="address"
                    autoComplete="off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="text"
                    name="text"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input
                    type="text"
                    name="text"
                    id="website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phoneno</label>

                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your Bank Name</label>
                  <input
                    type="text"
                    name="text"
                    id="bankName"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Enter your Bank Account Number
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Client Name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Client Address</label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-3 gap-10 mb-6">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  setList={setList}
                  list={list}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <button
                onClick={() => setShowInvoice(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
