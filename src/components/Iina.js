import React from 'react';
import ResponsiveGallery from 'react-responsive-gallery';

const images = [
    {
        src:  'https://lh3.googleusercontent.com/-i24XUGUlYOZO03qOeTr4Txaa9WeggjvuyiCRP3xcseEHcCbnZIxsMkt0ChW2V25y8_yTwfFPGfZVS_C6j3qMjoudKaJnJf9x1e2nDTSF5dSheV6w-kkykxzG9r35p1PbPTfzrNxePt-tUYaB0-bwKRgLBnR0mVyGs5wuB5zvToy9KQ5bsiLMUcgum9llBYcWnqnpYVDhVc7Vv12VqzPWA_eM53epmXsSVOgTTM_hR-2K_K6A-S_bF0LvGu979Y75634M-sxp1Qb7EHXdqwKEuNbOxB0BpZtJS2pGezzNCnwIRzFAbssYM_iM8hXAU0oMgXgyjt9bJk7My5k832pwjMuUYurUqVOmvKlfcQFA0aditfgLmkx79VA-GrENDepf4jSLQez6rEZZ8afMnljodYP3PbjTZLqDhjp28ROeRQVJtGeLFliJ4VDNotHXEVFs97J27tAGC0DRUlBI5m-czPUIBB4KDC5VH2MhUeyBgwAGwkcdxLGwaLSMpADniG-urT8vWOZnWlve_HEU-ApDiwJGo3UIIGve0NYL5MiQYNkk5_iF7t2rPNuGDglkJ91w_QY31yLeOfHv-dwuFoVzR2BTzF9ZTNBE-Xsy4Q7oYaXGJWm6T3GauppEdllNO-cMy93V7EtCcts78R7wv4J8Ac_71mVI6kVw6RpdSgeJQr2RQpW4nOXROFH6yNhBQ=s903-no' 
    },
    {
        src: 'https://lh3.googleusercontent.com/9G_5Uk3ChaziN-_x6px6xcfq_TtBlazyzKQwxwx6sbXVqYs9lrDdyauIYLEkE-M5whkM108ec-x6AJjbAR9abOArJOBddzxisnZCO4KFuCaK_-Wr8wgVADLretcBwUWKmVTMls9bih9HBQjRsWtp09gPGxiM11XHRYfaNJ9BC1dzt1uzrFo2AAmW27JIXjIFxqZdXphCfYZMwKy6buJgXWk6l0zTPW39WKi55IN1N3lPweObT48P6z3jFqT8n1VlMwaJKYxakuSHuTSHjEXHIICMZ5sEm-OlrOVMo3bzwbGkpci9GF1sNmLhPYSU2K5HjtUjwLZka9SePWAQwgd8wLuIT8juZ7oZgmLr32Y9X4DUa_ZEgSGPt_yP8neL0jRDGfm073dQQSIyiztRltkCI9EcFffSiapzFNU9CtskxiXKIRZZ99KryWSonNart0UQx80T7PBwUNZrtJcN3O3x1RcbUX_vxaZ_wdcK3JrouDdB59QuF6MnV19MA53Kp32jVpToglrHmSofEL0nG2bYuqwpYfqGU8yecgqg-UW5N-dAQuqCV_HKV6UV--yFryu88jR080YxViTGNiNBXfsA2dXyJuGDwmsMeXmyKHOc69zlLGHLkFKy5Yhlz7iuQM62NSrwDP2AD3klGJvLiNpn8P6g9UHX5s-hX4PHBvlbnIc7tQbFZPOfzxfhrmiMXg=w1080-h576-no'
    },
    {
        src: 'https://lh3.googleusercontent.com/fsrcxLtG1oHlfYlnZf11McCDDUQreYK39qF6Ah1TNGLxwqCSEX7uOKnr4Yesw3Wq1g75RH3xczxf8amyWQVgpVLkgcKuAB4C2kYQRJVOdFVFDVBfiJ76my-h2fV5KKgcrN7jVx-d2HgmKpTjsKhkpYsNLXm_r1mz5ZzEJwDEFLcuE53J-duPn8NROs2IudNUnj4Sr4X72AQO0UQt0wW_0KRyJWvmImBJOdyJZbG1Eb2fFRDpTDxemSoqhj3I-F4Gje-nv66UKWS5XM7vfdcVx7a8dR6ayzcxGeFpQScl0LoqhpOQZSL5--a0tU2JWCgj0amh8XtuXvEPQPoq-voeDX92LudGFre3pMpmY7EAELhb3jFnWpIremgXQjP6YvWT2wSuJqHdDBatRv4c87wQVgwJnEAOBDLMIyZ1sduVVB4dYe11AATC8k-CWWeGyRlVhzZKsLLGZnWIJK99__qmNqdBCNxEmP-YkyjXLcJqjvQW9fmBH4QZGLLhHTk4ubNIYNth18p-oh0NRL-e9xNzboCyRlr2gbliljh7ROtZs9hyeveAeaTedUhWUGwY-2UUQsP9VgenPBmmTLr8zTsMLtDRfn_Tb2uTjE8MJsTN4g2ndYZaY-sI8zctvO13WmyzH6eEe8C5UieaNtOp6ZGbF0n7hB8R8ectQw_waV_xQFPCwyqzxueWXo5iQoav3Q=w804-h903-no'
    },
    {
        src: 'https://lh3.googleusercontent.com/GGDPLDH0qy3fC6OF33OUc0NbuJ4Pmg3onR3XSyotUQ_y6cRAL2-p-ZL1hSFhjRzf8o0RHZmV-HZxtWhlfI6z5gU_hcV9wDM05DjZsjN0lPzP4cc6jBEUsIN8nS91e7vrrOCwh3FlWmMSrzhFJMCre6MxaseBTMEK6g09pxuJZbDs8IvyMar_jBq80x-pLDVkKHJIPwR-OPmFRCxJJ54gAZE-xBQUtpwqOdn1zRr7q-4c6DlQeQVHjovY6IWaK7nHbpByLMhgKkHTTxYopNpP9HWXRnfrn2_a3jd8cZxFZRflNhYNHzJbm_oCj35VgpfwhT98SyyJd9-Rf2aPCkyqx6bX4quDzsgqJUGjTkDZABnuidobDUu8GLdjxd2pejWwa8Yheom54nUbozr2YsfbrpqxJVRO00XnlU1qCIILa1qF6OX8jr2SLRRWLZAbz04_ECyKBY-enb6xuY6kPI8AUhKOWzRba-vmdWWLf2BYltteI_6MKye7WoOX-b8gp_wjXa3KsRWI22bex5NkS_mgmolovmXrAzU_xhK3DXNhYJZYJLP-C2oY5YfX4Fq7yM54I14Z9lfmQY5zMiyCeQmq0xPlwRlWkVYgRIXwc2sAtGRDVOPqK1jne2qZ6OkUBAdjbFhVfsGL9PMB-0EZS-tCu9phTTp8nNQF3f7Q8hD6LoAV9nzR7J6kfJROGnDW2A=w723-h903-no'
    },
    {
        src: 'https://lh3.googleusercontent.com/cRjve9KDxPUhtdiwcyYzXr8TXFiFKi721dG1uyLoP6nDVx4KBZg79ullr4S8nmWkPLABKv9iapv7TuToVaCbt8iq--phtu9j7E2ose4kaXknVl8LK3vx54z0hIzGvB151hNEWO2Ok0WllFCcWDqPUh3wEUbfTxTKdkV_F_je9i9i_DYwcwh_WEP-5CRAIkLL-SoV-3Vn3-c8Rb6q0yiUlEj8TY48oocCRs6pFOTu4Cax9LD8RQg_xwuFweuKsWfQdWzUED6-E0QoY3_JHU66d6yqza_Og024fArPqmj8zfkRoR0z2d0oe8x55I75uaNGOiqG2l2xBX7MYrkRdBDJ8dxuwTWV3MbLG01piwJju6usRM-4zO4N287-qmErk2i6BUChHQcTVKDuU6SzNe210RWZiTzKwynaR37CQnnagA1SrITqM6qEnXqDgBr3ZV1JIp9wAn0cWIp8ZnvexhRcKd-2tN3tSdjKggMqXu3fYC4h6YxEoomPIHSOxm4xVyW5ZNZMJeLf0Q0ZEkq3cb8hxFw_7jLSvuUyjnyOFjRL5eQMVqwVJ9S88An6dCevSf-4iY8ghBDshSXBHgITiTxAdLmgecTMLuxx3Tyg3aRkHcFkShs2wXprCeuovIUm0DrL-ZHqHVIXGbzcyq9gsNHgI4rysW3E119aDcf_nkqUiPrj1v2Hmb1id0vPXvnFZA=s903-no'
    },
    {
        src: 'https://lh3.googleusercontent.com/RH2C-AzNyqFHMx8ZV23ARY9jzAj1lHelsNE_AHYKan2bKaESHECqoLF3gq0_B8OOBcDeGaTgr2I1apFhKp0lKOYgyxJLPp-SXJezUPb_aUq2H8a2izQsbYpErTxHY9ScmnXXZHhLhUuLNv_stPoNM95jFp6cU2m8fP-GWx0nRSNXOgMmwOgRUT4of1goZzpmeudveGWKE-YrbA_15ue0rECnYsMADA2NAzDfuSTO38l3o49v3npsCrGSfyd-mtvEpEJyAzyG8PlHfUBdH6ReWqdNB2DxkrLmFyd15wr-lP1oBobsEZ31SODkGPx7xpUSarnH76LFDBo2y__Fser-WEXAP6OOGyeR_yt8EDpd6AKUNaZcDicqhaOCmgKaFuEYMQ1ITrTzhjLboCV6gRkjP47ZmrdoF4STb2NYAkN_LCe_Wou5nNWXSmEPDVnRLSP3zONNFkPyhsX9V8YdRaeulOdtpkwJDq8DaCDzbm5sPwtBiZVlJ33n9Dq74btkghF9yWS2Ve1IBMUYcyjgoun46gKIGHe-XDH5iXyeZZNYv6-7aQXDcdSiPZ1alz42bAQIYR4YvUkKyPFxC6C3YSQgE4twV-CG-ylqhPqlRYwRAGObEpRUQTMV5fMYTh1D3vEOIP_PBo59deGaumA7oZ08M2NsSgDmLa5UGxgtiZvkh6se29-HRMhKTVhovwbj2g=w1122-h903-no'
    }

];
const Iina = () => {
  return (
    <div>
     <h2 style={{ marginLeft: '30px', marginRight: '30px', textAlign: 'center' }}>Kuvia Iinan töistä</h2>
        <ResponsiveGallery images={images} />,
    </div>
  );
}

export default Iina;
