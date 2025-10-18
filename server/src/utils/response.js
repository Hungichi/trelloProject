
export function ok(res, data, message = 'OK') {
    return res.json({ success: true, message, data });
  }
  
  export function created(res, data, message = 'Created') {
    return res.status(201).json({ success: true, message, data });
  }
  
  export function badRequest(res, message = 'Bad request', errors) {
    return res.status(400).json({ success: false, message, errors });
  }
  export function unauthorized(res, message = 'Unauthorized') {
    return res.status(401).json({ success: false, message });
  }
  export function notFound(res, message = 'Not Found') {
    return res.status(404).json({ success: false, message });
  }
  export function internalServerError(res, message = 'Internal Server Error') {
    return res.status(500).json({ success: false, message });
  }
  export function conflict(res, message = 'Conflict') {
    return res.status(409).json({ success: false, message });
  }