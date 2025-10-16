
export function ok(res, data, message = 'OK') {
    return res.json({ success: true, message, data });
  }
  
  export function created(res, data, message = 'Created') {
    return res.status(201).json({ success: true, message, data });
  }
  
  export function badRequest(res, message = 'Bad request', errors) {
    return res.status(400).json({ success: false, message, errors });
  }