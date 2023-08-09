import { useState } from 'react';
import jumboimg from '../assets/img/undraw_visionary_technology_re_jfp7.svg';

export default function Home() {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            fullName,
            phoneNumber,
            email,
            companyName
        }

        console.log(data);
    }

    return (
        <div className="home">
            <div className="p-5 mb-4 bg-white rounded-3">
                <div className="container py-4">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-8">
                            <h1 className="display-5 fw-semibold">KeDA ERP</h1>
                            <p className="fs-5 text-secondary">KeDA ERP for medium and growing business. Let the speed be your competitive advantage #1 by optimizing business processes.</p>
                            <a className="btn btn-primary fw-semibold px-4 py-2" href="/#about">Read more</a>
                        </div>
                        <div className="col-md-4">
                            <img src={jumboimg} className="img-fluid d-none d-md-block" alt="jumboimg" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="about" className="mb-4 py-4 bg-light">
                <h2 className="text-center mb-4">What is: KeDA ERP</h2>

                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7">
                            <p className="fs-5 text-secondary">
                                KeDA ERP is an ERP (Enterprise Resource Planning) system developed for growing companies. KeDA enables planning and managing key business processes, recording and analyzing sales results via dashboards.
                            </p>
                            <p className="fs-5 text-secondary">
                                KeDA has the capability to manage all key business processes and companies from production, sales, purchasing, service, inventory, project management and others.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pricing" className="mb-4 py-4">
                <h2 className="text-center mb-3">Pricing</h2>

                <p className="text-center text-secondary fs-5 mb-4">
                    Choose best package to growing your business.
                </p>

                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-3 mb-3 mb-md-0">
                            <div className="card h-100">
                                <div className="card-header py-4">
                                    <h4 className="text-center">Basic</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Mencatat barang masuk</li>
                                        <li className="list-group-item">Mencatat barang keluar</li>
                                        <li className="list-group-item">Mencatat hasil keuntungan</li>
                                    </ul>
                                </div>
                                <div className="card-footer py-4">
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mb-2">
                                            <h4><sup className="text-secondary">Rp</sup> 83,000,000</h4>
                                        </div>

                                        <button className="btn btn-primary px-4 py-2">Get started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3 mb-md-0">
                            <div className="card h-100">
                                <div className="card-header py-4">
                                    <h4 className="text-center">Business</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Mencatat barang masuk dan keluar</li>
                                        <li className="list-group-item">Mencatat keuntungan</li>
                                        <li className="list-group-item">Dapat menganalisa hasil penjualan dengan Chart</li>
                                        <li className="list-group-item">Support 7x24 jam</li>
                                    </ul>
                                </div>
                                <div className="card-footer py-4">
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mb-2">
                                            <h4><sup className="text-secondary">Rp</sup> 98,000,000</h4>
                                        </div>

                                        <button className="btn btn-primary px-4 py-2">Get started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3 mb-md-0">
                            <div className="card h-100">
                                <div className="card-header py-4">
                                    <h4 className="text-center">Entrepreneur</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Mencatat barang masuk dan keluar</li>
                                        <li className="list-group-item">Mencatat keuntungan</li>
                                        <li className="list-group-item">Dapat menganalisa hasil penjualan dengan Chart</li>
                                        <li className="list-group-item">Support 7x24 jam</li>
                                        <li className="list-group-item">Export data ke Excel</li>
                                        <li className="list-group-item">AI prediksi penghasilan</li>
                                    </ul>
                                </div>
                                <div className="card-footer py-4">
                                    <div className="d-flex align-items-center flex-column">
                                        <div className="mb-2">
                                            <h4><sup className="text-secondary">Rp</sup> 100,000,000</h4>
                                        </div>

                                        <button className="btn btn-primary px-4 py-2">Get started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="pt-4 pb-5 bg-light">
                <h2 className="text-center mt-4 mb-3">Contact Us</h2>

                <p className="text-center text-secondary fs-5 mx-auto mb-4">
                    Have a question regarding our service? Leave a contact number and our team will contact you within 24 hours.
                </p>

                <div className="container mb-4">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-10 col-lg-5 px-4 px-md-0">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="fullname" className="form-label">
                                        Fullname <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className="form-control" id="fullname" onChange={(e) => setFullName(e.target.value)} value={fullName} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone_number" className="form-label">
                                        Phone Number <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className="form-control" id="phone_number" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email <span className="text-danger">*</span>
                                    </label>
                                    <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="company_name" className="form-label">
                                        Company Name <span className="text-danger">*</span>
                                    </label>
                                    <input type="text" className="form-control" id="company_name" onChange={(e) => setCompanyName(e.target.value)} value={companyName} />
                                </div>

                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary btn-md py-2 fw-semibold">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
