import React from 'react'
const data = Array.from({ length: 20 }, (_, i) => ({
  title: `Item ${i + 1}`,
  content: `Content ${i + 1} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut.`,
}));
const truncateContent = (content, maxLength) => {
  return content.length > maxLength ? `${content.substring(0, maxLength)}...` : content;
};
const Inbox = () => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 gy-3" style={{ maxHeight: '80vh', overflowY: 'scroll' }}>
        {data.map((item, index) => (
          <div className="col" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{truncateContent(item.content, 100)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inbox