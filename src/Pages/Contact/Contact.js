import React, { useState } from "react";
import Header from "../../Components/Header/Index";
import Footer from "../../Components/Footer/Footer";
import * as S from "./Styles";

export default function Contact() {
    const [mensagem, setMensagem] = useState("");
    const [nome, setNome] = useState("");

    function handleMensagem(event) {
        setMensagem(event.target.value);
    }

    function handleNome(event) {
        setNome(event.target.value);
    }

    function enviarMensagem(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        const wpp = "553299431256";
        const url = `https://wa.me/${wpp}?text=Meu nome:%20${encodeURIComponent(nome)}%0AMensagem:%20${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    }

    return (
        <>
            <Header />
            <S.ContentContact>
                <S.Map>
                    <section>
                        <h3>Onde encontrar a gente?</h3>
                        <p>
                            Encontre-nos facilmente! Confira o mapa para ver a localização da nossa empresa.
                            Estamos em um local de fácil acesso, prontos para atendê-lo.
                        </p>
                        <br />
                        <h3>Endereço</h3>
                        <p>
                            Professora Nair Temponi - n° 56<br />
                            Nova Pequeri<br />
                            PEQUERI/MG - 36610-000
                        </p>
                    </section>
                    <section>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4677.485739561293!2d-43.121789874783715!3d-21.8416619427358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x987d000b4eef4d%3A0x659eeba13559da94!2zQWxpYW7Dp2EgVMOqeHRpbA!5e1!3m2!1spt-PT!2sbr!4v1717946633097!5m2!1spt-PT!2sbr"></iframe>
                    </section>
                </S.Map>
                <S.Contato>
                    <section>
                        <h3>Envie uma mensagem para o nosso WhatsApp!</h3>
                        <form onSubmit={enviarMensagem}>
                            <input type="text" placeholder="Digite seu nome" onChange={handleNome} value={nome} />
                            <textarea placeholder="Digite sua mensagem" onChange={handleMensagem} value={mensagem} />
                            <button type="submit">ENVIAR</button>
                        </form>
                    </section>
                    <S.Number>
                        <div>
                            <h3>Números úteis</h3>
                            <p>Comercial: (32) 99943-1256</p>
                            <p>Financeiro: (32) 99956-5091</p>
                            <p>Departamento Pessoal: (32) 99880-7858</p>
                            <p>Representante: (32) 99989-0220</p>
                        </div>
                        <div>
                            <h3>Horários</h3>
                            <p>Escritório: 07:00 às 17:00 - Seg - Sex</p>
                            <p>Produção: 24hrs - Seg - Sex</p>
                        </div>
                    </S.Number>
                </S.Contato>
            </S.ContentContact>
            <Footer />
        </>
    );
}
