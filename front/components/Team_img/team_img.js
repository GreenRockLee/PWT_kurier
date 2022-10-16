import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="container marketing p-2">
                {/*Nadpis*/}
                <div className="col text-center p-3">
                    <button type="button" className="btn btn-outline-dark ratio ratio-10x9 fs-2 fw-ligh">Náš tím
                    </button>
                </div>
                {/*Nastavenie teamu*/}
                <div className="row ">
                    {/*Tomáš*/}
                    <div className="col text-center p-3">
                        <img className="bd-placeholder-img rounded-circle m-3" width="200" height="200"
                             src="/img/team_imgs/dv.jpg"/>
                        <h2 className="fs-3 text-center">Tomáš Šimka</h2>
                        <div className="mx-lg-4">
                            <button type="button" className="btn btn-outline-dark ">CEO</button>
                        </div>
                    </div>
                    {/*Miloš*/}
                    <div className="col text-center p-3">
                        <img className="bd-placeholder-img rounded-circle m-3" width="200" height="200"
                             src="/img/team_imgs/dg.jpg"/>
                        <h2 className="fs-3 mx-lg-3 text-center">Miloš Penzo</h2>
                        <div className="mx-lg-5">
                            <button type="button" className="btn btn-outline-dark ">Kuriér</button>
                        </div>
                    </div>
                    {/*Dušan*/}
                    <div className="col text-center p-3">
                        <img className="bd-placeholder-img rounded-circle m-3" width="200" height="200"
                             src="/img/team_imgs/bb.jpg"/>
                        <h2 className="fs-3 mx-lg-2 text-center">Dušan Lojzi</h2>
                        <div className="mx-lg-5">
                            <button type="button" className="btn btn-outline-dark ">Kuriér</button>
                        </div>
                    </div>
                    {/*Šimon*/}
                    <div className="col text-center p-3">
                        <img className="bd-placeholder-img rounded-circle m-3" width="200" height="200"
                             src="/img/team_imgs/lc.jpg"/>
                        <h2 className="fs-3 mx-lg-2 text-center">Šimon Cézi</h2>
                        <div className="mx-lg-5">
                            <button type="button" className="btn btn-outline-dark ">Kuriér</button>
                        </div>
                    </div>
                    {/*Michal*/}
                    <div className="col text-center p-3">
                        <img className="bd-placeholder-img rounded-circle m-3" width="200" height="200"
                             src="/img/team_imgs/ms.jpg"/>
                        <h2 className="fs-3 mx-lg-2 text-center">Michal Hric</h2>
                        <div className="mx-lg-5">
                            <button onClick="/pes" type="button" className="btn btn-outline-dark">Kuriér</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
