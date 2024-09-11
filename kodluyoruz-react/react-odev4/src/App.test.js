import React from "react";

import {render,screen,fireEvent} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Header from "./Header";
import EmojiResults from "./EmojiResults";
import SearchInput from "./SearchInput";
import emojiList from "./emojiList.json";
import App from "./App";



test("Başlık kısmının başarılı bir şekilde render edildiğini kontrol edecek olan test", ()=>
{
  render(<Header/>);

  
  const headerElement = screen.getByText(/Emoji Search/i);
  expect(headerElement).toBeInTheDocument();
});

test("Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol edecek olan test", ()=>
{
  
  render(<App/>);
  let emojiList = [...document.querySelectorAll('.emoji-item')].slice(0, 10);
  emojiList.map((item)=>{
    expect(screen.getByText(item.title)).toBeInTheDocument();
})
  
});

test("Bir filtreleme işlemi yapıldığında, emoji listesinin bu filtreye uygun şekilde yeniden render edildiğini kontrol edecek olan test",   ()=>
{
  const textChangeMock = jest.fn();

  // Bileşeni render et, ve textChange fonksiyonunu geç
  render(
    <>
      <SearchInput textChange={textChangeMock} />
      <EmojiResults emojiData={emojiList} />
    </>
  );

  // Input elemanını bul
  const input = screen.getByPlaceholderText('Search Emoji');

  // Input'a yazı yazdır
  userEvent.type(input, 'Smile');

  // Input'un yazıyı doğru aldığını kontrol et
  expect(input).toHaveValue('Smile');

  

  /// Filtreleme sonrasında ekranda "Smile" içerikli emoji'nin olup olmadığını kontrol et
  const smileEmoji = screen.getByText('Smile'); // Başlıkta 'Smile' geçen emojiyi kontrol ediyoruz
  expect(smileEmoji).toBeInTheDocument(); // 'Smile' başlıklı emoji varsa test geçer


});

test("Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol edecek olan test", ()=>
{
  const textChangeMock = jest.fn();
  
  render(
    <>
      <SearchInput textChange={textChangeMock} />
      <EmojiResults emojiData={emojiList} />
    </>
  );
  
  const emojiDiv = screen.getByText("100");
  expect(emojiDiv).toBeInTheDocument();

  fireEvent.click(emojiDiv);
  
  
  expect(emojiDiv.parentElement.getAttribute('data-clipboard-text')).toMatch('💯')

  
  
});