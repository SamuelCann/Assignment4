import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBIQDw8QDw8PDhAQDw8PDw8QEBAQFREWFxUVFRUYHiggGBomHRUVITMhJTUrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0uLS0tLy0tLS0vLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLf/AABEIAHsBmgMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUBAgj/xABLEAABAwIABQ4KCAUDBQAAAAABAAIDBBEFBhIhMQcTQVFUYXFygZGTsbLRFBYiMjNzkqHB0hUjNFJTgoPCJEJEYrNDovAXo8PT4f/EABoBAQADAQEBAAAAAAAAAAAAAAAEBQYDAgH/xABCEQABAgMDBQoNBAIDAQAAAAABAAIDBBEFITESQVFhcRM0gZGhsbLB0eEGFBUyM0JScoKiwuLwIlNikiTxI0NjFv/aAAwDAQACEQMRAD8AvFEREREREREREREREWjT+mk4XdiJby0KcfXycvvZF3LfRERERERERERERFpYW9HynsOW4Fp4V8zlPYct1ERERERERERERERacXpn8B7Ma3Fpw+mfwftYiLcREREREREREREWvW+Z+ePttWwtau8z80fbaiL7o/Rs4jeyFmWGk9GziN7IWZEREREREREREREWlV+li4T1hbq0awfWxHfI97VvIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi0YPTyc/wDsjW8uRR1IdVzsAPkBtzmsDksze8FddEREREREREREREWlhb0Z4fgVurRwwbRHhHWt5ERERERERERERERaUR+veP7Qfc3uW6uTTzg1krL5xE06OLftDnRF1kRERERERERERFgrfMN9tvaCzrVwj6J28AeYgoiyUno2cRvZCzLDSejZxG9kLMiIiIiIi8uvURERERaNcfrIeMR72reXGwzUiOWmBBOXLa++XMA6+tdlERERERERERERERERERERERQrVJxjmoYohAQ2Sdz/ACyA7JawC9gc1zlDTvqaqsNWo5qThqOqJcozi1hIU2zYTYk0xrxUX3bAT1KI+O+Et1u9hncvfHfCW63exH3KOL1V+6P0njWy8Tlv2mf1b2KReO2Et1u9hncvoY74T3U/T9xnco6t/BeBamqyvBoH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 "
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
              What an About page should be is a goal-oriented sales page, one
              that focuses on highlighting the biggest selling points of your
              story and brand, making a strong impression on curious customers.
              If anyone wants to quickly understand your brand, your About page
              should be the single link you send them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
