import React from 'react';
import './function.js';
import { Link } from 'react-router-dom';
var $ = require('jquery')

export class HomeHTML extends React.Component {

    componentDidMount() {
        $('#cssmenu li.active').addClass('open').children('ul').show();
        $('#cssmenu li.has-sub>a').on('click', this.showClientOptions);
    }

    showClientOptions() {

        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(200);
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(200);
            element.siblings('li').children('ul').slideUp(200);
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(200);
        }
    }

    render() {
        return (
            <div id='cssmenu'>
                <ul>
                    <li className='has-sub'><a href='#top'>Clientes</a>
                        <ul>
                            <li><Link to="/register">Crear Cliente</Link></li>
                            <li><Link to="/">Mostrar Clientes</Link></li>
                        </ul>
                    </li>
                    <li className='has-sub'><a href='#top'>Proyectos</a>
                        <ul>
                            <li><Link to="/createProject">Crear Proyecto</Link></li>
                            <li><Link to="/">Mostrar Proyectos</Link></li>
                        </ul>
                    </li>
                    <li className='logout'><Link to="/login">Cerrar Sesión</Link></li>
                </ul>
            </div>
        )
    };
};