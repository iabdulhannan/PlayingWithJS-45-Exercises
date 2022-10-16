function make_album(artistName, albumTitle, numberOfTracks) {

  let musicAlbum = {
    artistName: artistName,
    albumTitle: albumTitle,
  }

  numberOfTracks && (musicAlbum.numberOfTracks = numberOfTracks)


  return musicAlbum
}

console.log(make_album('Atif Aslam', 'Coke Studio'))
console.log(make_album('Atif Aslam', 'Velo Sound Station', 2))
console.log(make_album('Atif Aslam', 'APKGK'))