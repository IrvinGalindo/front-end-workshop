import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app';
import 'evil-icons/assets/evil-icons.js';

import Header from './components/header';
import Footer from './components/footer';
import Cover from './components/cover';
import ListPets from './components/list-pets';

const App = () =>   (<React.Fragment>
                        <Header />
                        <main>
                            <Cover />
                            <ListPets />
                        </main>
                        <Footer />
                    </React.Fragment>
                    )

ReactDOM.render(<App />, document.getElementById('root'));
