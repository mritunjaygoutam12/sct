import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    data : [ [ '9 Sep 1994', 110 ],
    [ '28 Oct 1994', 115 ],
    [ '11 Nov 1994', 105 ],
    [ '2 Mar 1996', 137 ],
    [ '5 Apr 1996', 100 ],
    [ '15 Apr 1996', 118 ],
    [ '28 Aug 1996', 110 ],
    [ '14 Dec 1996', 114 ],
    [ '9 Feb 1997', 104 ],
    [ '14 May 1997', 117 ],
    [ '7 Apr 1998', 100 ],
    [ '22 Apr 1998', 143 ],
    [ '24 Apr 1998', 134 ],
    [ '7 Jul 1998', 128 ],
    [ '28 Oct 1998', 141 ],
    [ '29 Aug 1999', 120 ],
    [ '17 Mar 2000', 122 ],
    [ '20 Oct 2000', 101 ],
    [ '8 Dec 2000', 146 ],
    [ '31 Mar 2001', 139 ],
    [ '5 Oct 2001', 101 ],
    [ '24 Oct 2001', 146 ],
    [ '11 Jul 2002', 113 ],
    [ '23 Feb 2003', 152 ],
    [ '26 Oct 2003', 100 ],
    [ '15 Nov 2003', 102 ],
    [ '16 Mar 2004', 141 ],
    [ '12 Apr 2005', 123 ],
    [ '6 Feb 2006', 100 ],
    [ '14 Sep 2009', 138 ],
    [ '5 Nov 2009', 175 ],
    [ '27 Feb 2011', 120 ],
    [ '12 Mar 2011', 111 ],
    [ '16 Mar 2012', 114 ] ]
  },
  mutations: {

  },
  actions: {

  }
})
