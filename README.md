# Gerador de QR Code - Versão 1
![Screenshot-20241106161801](https://github.com/user-attachments/assets/65cdf057-7d0d-479a-950a-023f17579ee2)


Este é o projeto de criação de QR Codes que permite aos usuários gerar códigos QR personalizados para diversos fins. Utilizando uma interface simples e intuitiva, o aplicativo facilita a criação rápida de QR Codes a partir de URLs, textos, ou outros dados.

## Funcionalidades

- **Geração de QR Code**: Gere códigos QR a partir de URLs ou textos personalizados.
- **Personalização do Tamanho**: Escolha diferentes tamanhos para o código QR gerado.
- **Baixar QR Code**: Salve o código QR como uma imagem em seu dispositivo.
- **Compatibilidade com Navegadores**: Desenvolvido para rodar em navegadores modernos, sem necessidade de instalação adicional.

## Tecnologias Utilizadas

- **HTML5** e **CSS3** para a interface do usuário.
- **JavaScript** para a lógica de geração e download de QR Codes.
- **API de QR Code** (ex: [api.qrserver.com](https://api.qrserver.com)) para a criação do código QR.

## Como Usar

1. **Acesse a página principal** do projeto.
2. **Insira o texto ou URL** que deseja converter em QR Code.
3. **Escolha o tamanho** desejado do QR Code.
4. **Clique no botão "Gerar"** para visualizar o QR Code.
5. **Baixe a imagem** do QR Code para uso.

## Link do projecto para testar
[https://raimundobraz2.github.io/Gerador-de-QRCODE/](https://raimundobraz2.github.io/Gerador-de-QRCODE/)

## OBS
Algumaas funcionalidades citadas ainda estão na fase de desenvolvimento

## Exemplo de Uso

```javascript
https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=SeuTextoAqui
