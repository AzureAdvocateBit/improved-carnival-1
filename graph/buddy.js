import graphClient from './graphClient.js';

export async function getBuddyInfo() {
  try {
    const response = await graphClient
      .api(`/me/drive/special/approot:/tunesquadfans.json/:content`)
      .get();
    return response;
  }
  catch (err) {
    if (err.statusCode === 404) {
      return;
    }
    else {
      throw err;
    }
  }
}

export async function saveBuddyInfo(buddy) {
  return graphClient
    .api(`/me/drive/special/approot:/tunesquadfans.json:/content`)
    .header('content-type', 'text/plain')
    .put(JSON.stringify({
      buddy
    }));
}