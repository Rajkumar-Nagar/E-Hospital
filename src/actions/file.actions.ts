export const uploadImage = async (formdata:FormData) => {
    const formData=new FormData()
    formData.append('upload_preset', 'rajkumar264');
    formData.append('file',formdata.get('file')!)
    try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/de12ytbyw/image/upload`, {
            method: 'POST',
            body: formData
        });
        if (!res.ok) {
           return(`Upload failed with status ${res.status}`);
        }
        const data = await res.json();
        return data.public_id
    } catch (err) {
        console.error(err);
        return(err instanceof Error ? err.message : 'An error occurred');
    }
};